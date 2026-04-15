@echo off
echo ==========================================
echo   [!] COPIANDO DADOS FALTANTES...
echo ==========================================
echo.
copy /Y "C:\Users\Luan\.gemini\antigravity\scratch\enem-na-pratica\src\js\data.js" "C:\Users\Luan\.gemini\antigravity\scratch\enem-na-pratica\public\src\js\data.js"
copy /Y "C:\Users\Luan\.gemini\antigravity\scratch\enem-na-pratica\src\js\simulados-extra.js" "C:\Users\Luan\.gemini\antigravity\scratch\enem-na-pratica\public\src\js\simulados-extra.js"
copy /Y "C:\Users\Luan\Downloads\80simulados\simulados-extra2.js" "C:\Users\Luan\.gemini\antigravity\scratch\enem-na-pratica\public\src\js\simulados-extra2.js"

echo.
echo ==========================================
echo   [!] ARQUIVOS COPIADOS COM SUCESSO!
echo ==========================================
pause
