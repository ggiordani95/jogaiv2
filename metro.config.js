// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Adiciona suporte para arquivos .json (Lottie)
config.resolver.assetExts.push("json");

module.exports = config;
