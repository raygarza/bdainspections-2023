import './globals.css'
import NavbarMain from './components/utilities/NavbarMain';
import Footer from './components/utilities/Footer';
import Banner from './components/utilities/Banner';
import AlertBanner from './components/utilities/AlertBanner';

export const metadata = {
	title: "BDA Inspections | Lake Charles",
	description:
		'Proudly Seerving the Lake Charles Area with Home Inspection Services',
	keywords: 'home inspections, real estate, foundation, plumbing, framing, roofing, hvac, inspections, stucco , louisiana, lake charles ',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
					rel='stylesheet'
					href='https://rsms.me/inter/inter.css'
				/>
        <meta
        name='viewport'
        content='width=device-width, user-scalable=no'
      />
      </head>
      <body>
				<div className=''>
				 <Banner />
					<NavbarMain />
					{/* <AlertBanner/> */}
         
				</div>
				{children}
				<div className='bg-white border-t '>
					<div className='mx-auto max-w-7xl px-6 pb-8 py-6'>
						<Footer />
					</div>
				</div>
			</body>
    </html>
  )
}
