export const makeURL = (urlType: string, urlPrefix: string | undefined, relativeUrl: string) => {
  if (urlPrefix === undefined || urlPrefix.length === 0 || !urlPrefix.startsWith('http')) {
    const prefixType = typeof urlPrefix;
    throw new Error(`${urlType} URL prefix must be set and start with http: bad prefix (${prefixType}) '${urlPrefix}'`);
  }
  return urlPrefix + '/' + relativeUrl;
};
