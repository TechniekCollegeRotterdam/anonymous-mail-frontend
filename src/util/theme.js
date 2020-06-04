export default {
    overrides: {
        MuiBackdrop: {
            root: {
                backgroundColor: 'rgba(8,9,8,0.76)' 
            }
        }
    },
    palette: {
        primary: {
            light: '#33c9dc',
            main: '#94F0FF',
            dark: '#008394',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff6333',
            main: '#ff3d00',
            dark: '#b22a00',
            contrastText: '#fff'
        }
    },
    spreadThis: {
        container: {
            position: 'relative',
            color: '#94F0FF',
            fontSize: 24
        },
        plusIcon: {
            position: 'absolute',
            right: 10
        },
        inputs: {
            marginBottom: 20,
            '&:last-of-type': {
              marginBottom: 30
            }
        },
        textColors: {
            color: '#94F0FF'
        },
        button: {
            backgroundColor: '#4A934D'
        }
    }
}