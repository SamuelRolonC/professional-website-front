function useSystemParameters() {
    const apiBaseUrl = 'https://localhost:44342';

    // Controllers
    const clientController = '/client';
    const contactController = '/contact';

    // Url generators
    const getUrlProfessionalData = (language) => {
        let url = apiBaseUrl+clientController+'/getprofessionaldata';
        url += `?lang=${language}`;

        return url;
    }
    const getUrlPostContact = () => {
        let url = apiBaseUrl+contactController+'/processform';

        return url;
    }

    return {
        apiBaseUrl,
        getUrlProfessionalData,
        getUrlPostContact
    }
}

export { useSystemParameters };