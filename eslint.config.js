export default [
    {
        files: ["**/*.test.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module"
        },
        rules:{
            semi: ['error', 'always'],
            quotes: ['error', 'single']
        }
    }
]