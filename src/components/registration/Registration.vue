<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-form
                        action="https://dev.standpoint.com.ua/developer"
                        method="POST"
                        >
                    <v-text-field
                            label="Login"
                            name="login"
                            type="text"
                            required
                    />

                    <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            required
                    />
                    <v-card-actions>
                        <v-btn color="primary">Login</v-btn>
                    </v-card-actions>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        valid: false
    }
</script>