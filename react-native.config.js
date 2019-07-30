module.exports = {
    project: {
        android: {
            "packageInstance": "new CodePush(getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey), getApplicationContext(), BuildConfig.DEBUG)"
        },
        ios: {
            "sharedLibraries": [
                "libz"
            ]
        },
        "commands": {
            "postlink": "node node_modules/react-native-code-push/scripts/postlink/run"
        }
    },
};