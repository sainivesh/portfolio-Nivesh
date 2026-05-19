# Run the portfolio without a system-wide Node install.
# Uses your portable Node folder on the Desktop.

$nodeDir = "C:\Users\nivesh.bagavatham\OneDrive - OTSI\Desktop\node-v24.15.0-win-x64"
$env:Path = "$nodeDir;$env:Path"

Set-Location $PSScriptRoot
npm run dev
