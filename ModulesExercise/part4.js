async function loadConfigs() {
    const getThemes = await import('./theme.mjs');
    const currentTime = new Date().getHours();
    return currentTime > 18 ? getThemes.setDarkTheme():getThemes.setLightTheme();
}

loadConfigs();