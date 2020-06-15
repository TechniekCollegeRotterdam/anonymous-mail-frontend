export default {
    overrides: {
        MuiBackdrop: {
            root: {
                backgroundColor: 'rgba(8,9,8,0.76)' 
            }
        },
        MuiToolbar: {
            root: {
                backgroundColor: 'transparent'
            }
        },
        MuiSkeleton: {
            root: {
                backgroundColor: 'rgba(148, 240, 255, 0.23)'
            },
            wave: {
                '&::after': {
                    background: 'linear-gradient(90deg, transparent, rgba(101, 128, 141, 0.22), transparent)'
                }
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
        },
        customError: {
            color: 'red',
            fontSize: '0.8rem',
            marginTop: 10
        },
        progress: {
            position: 'absolute'
        },
        textField: {
            margin: '10px auto',
        },
    }
}
