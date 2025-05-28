const components = {
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: 8,
                textTransform: 'none',
            },
        },
        variants: [
            {
                props: { gradient: 'to-left' },
                style: {
                    background: 'linear-gradient(to left, #42a5f5, #478ed1)',
                    color: '#fff',
                },
            },
            {
                props: { gradient: 'to-right' },
                style: {
                    background: 'linear-gradient(to right, #42a5f5, #478ed1)',
                    color: '#fff',
                },
            },
        ],
    },
};
export default components;
