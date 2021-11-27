const getTokenLogoURL = (address: string) => `${process.env.REACT_APP_BASE_URL}/images/tokens/${address}.svg` // FIXME: update URL for token logo

export default getTokenLogoURL
