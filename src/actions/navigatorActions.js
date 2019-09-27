
export const navigate = (tab, page) => {
    return {
        type: 'NAVIGATE',
        tab: tab,
        page: page
    }
}