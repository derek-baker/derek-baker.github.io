param($workDir = $PSScriptRoot)

$initialLocation = Get-Location

try {
    npm run build
    Set-Location $workDir
    Copy-Item -Path ./dist/**/* -Destination ../ -Verbose 
}
catch {
    $_
}
finally {
    Set-Location -Path $initialLocation
}