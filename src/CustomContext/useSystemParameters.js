function useSystemParameters() {
    const apiBaseUrl = 'https://localhost:44342';

    // Controllers
    const clientController = '/client'
        , contactController = '/contact';

    // Url generators
    const getUrlProfessionalData = (language) => {
        let url = apiBaseUrl+clientController+'/getprofessionaldata';
        url += `?lang=${language}`;
        return url;
    }
    , getUrlPostContact = () => {
        let url = apiBaseUrl+contactController+'/processform';
        return url;
    }
    , getUrlBlogData = () => {
        let url = apiBaseUrl+clientController+'/getblogdata';
        return url;
    }

    return {
        apiBaseUrl
        , getUrlProfessionalData
        , getUrlPostContact
        , getUrlBlogData
    }
}

export { useSystemParameters };