import prettier from "eslint-plugin-prettier";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import stencilPlugin from "@stencil-community/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/dist/", "**/loader/", "**/www/"],
}, ...compat.extends(
    "plugin:@stencil-community/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
), {
    plugins: {
        prettier,
        // https://github.com/stencil-community/stencil-eslint/issues/119#issuecomment-2562866658
        '@stencil-community': stencilPlugin,
    },

    languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: "./tsconfig.json",
        },
    },

    rules: {
        "@stencil-community/ban-default-true": "off",
        "@stencil-community/decorators-style": "off",
        "@stencil-community/required-jsdoc": "off",

        "react/jsx-no-bind": ["error", {
            ignoreDOMComponents: true,
        }],
    },
}];