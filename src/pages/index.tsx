import { useTranslation } from 'next-i18next'
import { GetStaticProps } from 'next'

import { NextPageWithLayout } from './_app'

export type HomeProps = {
}

/**
 * Client Side Code
 */

export const Home: NextPageWithLayout<HomeProps> = ({ }) => {
    const { t } = useTranslation();
    return (
        <div className="">
            <h1 className="">Hello world</h1>
        </div>
    )
}

export default Home;
