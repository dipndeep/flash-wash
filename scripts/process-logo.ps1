Add-Type -AssemblyName System.Drawing

$inputPath = "d:\code\flash-wash\logo.png"
$outputPublic = "d:\code\flash-wash\public\logo.png"
$outputImages = "d:\code\flash-wash\public\images\logo.png"
$outputFavicon = "d:\code\flash-wash\public\favicon.png"

$src = [System.Drawing.Bitmap]::FromFile($inputPath)

# 1. Save optimized 512x512
$targetSize = 512
$destBmp = New-Object System.Drawing.Bitmap($targetSize, $targetSize, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$graphics = [System.Drawing.Graphics]::FromImage($destBmp)
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
$graphics.DrawImage($src, 0, 0, $targetSize, $targetSize)
$graphics.Dispose()

$destBmp.Save($outputPublic, [System.Drawing.Imaging.ImageFormat]::Png)
$destBmp.Save($outputImages, [System.Drawing.Imaging.ImageFormat]::Png)
$destBmp.Dispose()

# 2. Save 128x128 favicon
$favSize = 128
$destFav = New-Object System.Drawing.Bitmap($favSize, $favSize, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$graphicsFav = [System.Drawing.Graphics]::FromImage($destFav)
$graphicsFav.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphicsFav.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$graphicsFav.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$graphicsFav.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
$graphicsFav.DrawImage($src, 0, 0, $favSize, $favSize)
$graphicsFav.Dispose()

$destFav.Save($outputFavicon, [System.Drawing.Imaging.ImageFormat]::Png)
$destFav.Dispose()

$src.Dispose()

Write-Host "Processed logos and favicon successfully!"
