$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:8080/')
$listener.Start()
Write-Host 'Server running on http://localhost:8080'

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    $localPath = $request.Url.LocalPath

    if ($localPath -eq '/') { $localPath = '/index.html' }

    $filePath = Join-Path (Get-Location) ($localPath -replace '/', '\')

    if (Test-Path $filePath -PathType Leaf) {
        $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
        $mimeTypes = @{
            '.html'  = 'text/html'
            '.css'   = 'text/css'
            '.js'    = 'application/javascript'
            '.json'  = 'application/json'
            '.gltf'  = 'model/gltf+json'
            '.bin'   = 'application/octet-stream'
            '.png'   = 'image/png'
            '.jpg'   = 'image/jpeg'
            '.jpeg'  = 'image/jpeg'
            '.gif'   = 'image/gif'
            '.svg'   = 'image/svg+xml'
            '.ico'   = 'image/x-icon'
        }
        $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { 'application/octet-stream' }
        $response.ContentType = $contentType
        $response.Headers.Add('Access-Control-Allow-Origin', '*')
        $buffer = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentLength64 = $buffer.Length
        $response.OutputStream.Write($buffer, 0, $buffer.Length)
    } else {
        $response.StatusCode = 404
        $buffer = [System.Text.Encoding]::UTF8.GetBytes('404 Not Found')
        $response.ContentLength64 = $buffer.Length
        $response.OutputStream.Write($buffer, 0, $buffer.Length)
    }

    $response.Close()
    Write-Host "$($request.HttpMethod) $($request.Url.LocalPath) -> $($response.StatusCode)"
}
