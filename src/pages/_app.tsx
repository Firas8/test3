import { ReactElement } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

/**
 * @see https://nextjs.org/docs/basic-features/layouts
 */
export type GetLayout<P> = (page: ReactElement, pageProps: P) => ReactElement;
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: GetLayout<P>;
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page)
    return  getLayout(<Component {...pageProps} />, pageProps)
}

/**
 * @see https://github.com/i18next/next-i18next#appwithtranslation
 */
export default appWithTranslation(MyApp);
