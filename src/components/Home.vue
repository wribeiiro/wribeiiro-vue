<template>
    <div class="home banner">
        <div class="banner-image" :style="{ 'background': 'url(' + backgroundData + ')' }">
            <div class="banner-caption">
                <div class="caption-text text-left">
                    <div class="glitch" v-html="textData" :data-text="textData"></div>
                    <p class="text" v-html="secondTextData"></p>
                    <Terminal
                        :about-text="aboutTextData"
                        :terminal-title="terminalTitle"
                    >
                    </Terminal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Terminal from './Terminal';

export default {
    name: "Home",
    props: {
        backgroundData: {
            type: String,
            required: true,
        },
        textData: {
            type: String,
            required: true,
        },
        secondTextData: {
            type: String,
            required: true
        },
        aboutTextData: {
            type: String,
            required: true
        },
        terminalTitle: {
            type: String,
            required: true
        }
    },
    components: {
        Terminal
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
    position: relative;
    z-index: -1;
}

.banner-image {
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: contain !important;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.banner-image:before {
    position: absolute;
    content: '';
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

.banner-caption p {
    font-family: 'Satisfy', cursive;
    font-size: 65px;
    margin-bottom: 60px;
    color: var(--text);
    text-shadow: 2px 3px 0 var(--black);
	position: relative;
}

.glitch {
    font-size: 100px;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    font-weight: 700;
}

.glitch:before {
    left: -3px;
    text-shadow: 4px 0 var(--synth-purple);
    animation: glitch-1 0.8s infinite ease-in-out alternate-reverse;
}

.glitch:after {
    left: 3px;
    text-shadow: -5px 0 var(--synth-blue);
    animation: glitch-2 0.8s infinite ease-in-out alternate-reverse;
}

.glitch:before,
.glitch:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    width: 100%;
    clip: rect(0, 0, 0, 0);
}

@keyframes glitch-1 {
    0% {
        clip: rect(36px, 9999px, 9px, 0);
    }

    25% {
        clip: rect(25px, 9999px, 99px, 0);
    }

    50% {
        clip: rect(50px, 9999px, 102px, 0);
    }

    75% {
        clip: rect(30px, 9999px, 92px, 0);
    }

    100% {
        clip: rect(91px, 9999px, 98px, 0);
    }
}

@keyframes glitch-2 {
    0% {
        top: -3px;
        left: 3px;
        clip: rect(65px, 9999px, 119px, 0);
    }

    25% {
        top: -7px;
        left: 5px;
        clip: rect(79px, 9999px, 19px, 0);
    }

    50% {
        top: 15px;
        left: 3px;
        clip: rect(68px, 9999px, 11px, 0);
    }

    75% {
        top: 15px;
        left: -5px;
        clip: rect(95px, 9999px, 53px, 0);
    }

    100% {
        top: -3px;
        left: 3px;
        clip: rect(31px, 9999px, 149px, 0);
    }
}

@media screen and (max-width: 360px) {
    .banner-caption p {
        font-size: 30px;
    }

    .btn-outline-vue {
        font-size: 12px !important;
        letter-spacing: none;
    }

    .glitch {
        font-size: 50px;
    }

    .banner-caption {
        margin: 0 auto;
        padding: 40px;
    }
}
</style>
