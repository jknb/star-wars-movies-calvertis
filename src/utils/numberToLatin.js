export const convertNumberToLatin = episodeId => {
    if (episodeId > 6 || episodeId <= 0) return null;

    const latinSymbols = ['I', 'II', 'III', 'IV', 'V', 'VI'];
    return latinSymbols[episodeId - 1];
}