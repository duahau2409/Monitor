export default build => 
    build.query({
        query: () => `admin/account-signal/sell-all`,
    })