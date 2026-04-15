@echo off
echo ==========================================
echo   🚀 ENVIANDO PARA CLOUDFLARE (GitHub)... 🌪️
echo ==========================================
echo.

:: Configura identidade
git config --global user.email "luanfernandesjijitsu-maker@gmail.com"
git config --global user.name "Luan"

:: Atualiza arquivos
git add .
git commit -m "feat(dashboard): Adicionando nova folha de redação e novo estilo"

:: Envia
git push origin main

echo.
echo ==========================================
echo   ✅ TUDO NO GITHUB! AGORA VAI NA CLOUDFLARE 🎯
echo ==========================================
echo.
pause
