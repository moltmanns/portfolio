'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SiBootstrap, SiFigma, SiShopify, } from 'react-icons/si'
import Navbar from '@/app/components/Navbar'

const tools = [
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'Bootstrap 5', icon: <SiBootstrap /> },
  { name: 'Shopify', icon: <SiShopify /> },
]

const images = [
  {
    src: '/assets/flexsteel/flexsteel-img1.jpg',
    title: 'Retailer/Sales Survey',
    description: 'Reaching out to the extensive list of retail clients asked simple questions to promote answers as easily as possible. Received back over 115+ responses of would like easier navigation, list of best sellers, admin access to content for their stores, and on-page PDP updates.'
  },
  {
    src: '/assets/flexsteel/flexsteel-img2.jpg',
    title: 'Competitors',
    description: 'Went through our top competitors in our “Value” category on how they were handling these issues, and began to piece together some similarities and how we can be address these issues without destroying the development budget/timeline.'
  },
  {
    src: '/assets/flexsteel/flexsteel-img3.jpg',
    title: 'Design Rationale',
    description: 'Introducing a more mega-menu so the great photo-shoot content we could leverage as much as possible instead of a simple list of things. This would also make navigating our large catalog of products easier for both B2B and D2C.'
  },
  {
    src: '/assets/flexsteel/flexsteel-img4.jpg',
    title: 'Design Rationale',
    description: 'Introducing a more mega-menu so the great photo-shoot content we could leverage as much as possible instead of a simple list of things. This would also make navigating our soon to be large catalog of products easier. As well as starting concepts of the modular furniture configurator. That is a huge hit among competitor sites and customers love to use it to piece together crazy set-ups.'
  },
  {
    src: '/assets/flexsteel/flexsteel-img5.jpg',
    title: 'Desktop Breakpoint'
  },
  {
    src: '/assets/flexsteel/flexsteel-img6.jpg',
    title: 'Tablet Breakpoint'
  },
  {
    src: '/assets/flexsteel/flexsteel-img7.jpg',
    title: 'Mobile Breakpoint'
  },
  {
    src: '/assets/flexsteel/flexsteel-img8.jpg',
    title: 'Chatbot',
    description: 'Was first hit with hesitation from stakeholders on this due to the fact that there was not enough workforce for customer service to handle this. After showcasing different options available for deployment, and how much it would cut down on customer service having to answer the same questions over and over again. A more FAQ based chat-bot was agreed upon to handle the questions but then could be elevated to live chat if needed.'
  },
  {
    src: '/assets/flexsteel/flexsteel-img9.jpg',
    title: 'Sticky Interactions',
    description: 'This was to handle to next opportunity for UX on the web-page, if we are trying to solve the issue of how to get B2B main model to work well in a D2C setting. Introduced a sticky button user-flow to allow non-retailer customers to find a local retailer and schedule/request information on the particular piece of furniture in the showroom closest to them. We then can interpret data from there to endpoint conversions if applicable.'
  },
  {
    src: '/assets/flexsteel/flexsteel-img10.jpg',
    title: 'Customers Survey',
    description: 'Reached out to retailers again (the beauty of having a very large retailer list) to ask customers what they would think of an app for Flexsteel, as well as asking themselves. We got back 22 responses from a large list of retailers from interactions with customers (not the best method but UX maturity is in question). They informed that use-case was there so design and conceptualization was agreed upon to move forward.'
  },
  {
    src: '/assets/flexsteel/flexsteel-img11.jpg',
    title: 'Competitors Apps',
    description: 'So there isn’t many that operate on a mobile app (maybe a reason) and big-box brand apps, along side smaller competitors web apps that allow for customer interaction. The biggest take away was easily move through products with one thumb, use large lifestyle images whenever possible, and easy to follow interface.'
  },
  {
    src: '/assets/flexsteel/flexsteel-img12.jpg',
    title: 'Wireframe'
  },
  {
    src: '/assets/flexsteel/flexsteel-img13.jpg',
    title: 'Concept Prototype'
  },
  {
    src: '/assets/flexsteel/flexsteel-img14.jpg',
    title: 'Customer Interactions',
    description: 'Customers can effortlessly browse, make purchases, and get tailored recommendations. Our push notifications? They’re like friendly nudges keeping users updated on orders and sweet deals. Main thing is ability to switch between all brands for browsing products.'
  },
  {
    src: '/assets/flexsteel/flexsteel-img15.jpg',
    title: 'Retailer Benefits',
    description: 'Retailers benefit from the app’s retailer locator, which helps customers find nearby retail outlets. Real-time inventory management and order tracking features enable retailers to manage stock levels efficiently and keep track of orders.'
  },
  {
    src: '/assets/flexsteel/flexsteel-img16.jpg',
    title: 'Sales Associates Use',
    description: 'Sales associates get instant access to product details, inventory, and customer info, even on the go. With CRM integration, they can update client info and manage leads easily. No internet? No problem—offline mode has them covered. Plus, route optimization helps plan their visits like a pro!'
  },
  {
    src: '/assets/flexsteel/flexsteel-img17.jpg',
    title: 'Full App Design Flow'
  },
]

export default function CaseStudyPage() {
  return (
    <div className="bg-[#0D0B0C] h-screen overflow-y-auto lg:overflow-hidden">
      <Navbar />

      <div className="relative flex flex-col lg:flex-row pt-[60px] min-h-[calc(100vh-60px)]">
        <aside className="lg:w-[30%] w-full px-6 sm:px-10 lg:px-12 py-10 border-b lg:border-b-0 lg:border-r border-[#222] z-10 lg:max-h-[calc(100vh-60px)] lg:overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="text-3xl text-[#ffffff] font-bold uppercase mb-1" role="heading" aria-level={1}>
            UI/UX Website Overhaul<br />
            and Mobile App Design
            </div>
            <p className='text-sm'>Flexsteel D2C Website Was Due</p>

            <div className="flex flex-wrap gap-3 text-2xl text-[#7efcd2] mb-12">
              {tools.map((tool, i) => (
                <div key={i} title={tool.name}>
                  {tool.icon}
                </div>
              ))}
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">MY ROLE</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">Content Development, UX Researcher,
              Web Developer, UI Designer</p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">OVERVIEW</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
              Flexsteel, a leading furniture brand, focuses on B2B sales with D2C options via Flexsteelstore.com. I enhanced the user experience, modernized the design, boosted performance, and improved usability.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">THE CHALLENGE</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
              Key challenges included outdated designs, poor mobile responsiveness, weak SEO, inefficient retailer locator, and no mobile app.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">THE GOAL</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
              Modernize the design, made the site mobile-friendly, improved the retailer locator, optimized SEO, and designed a mobile app to boost accessibility for retailers and sales teams for future development.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">RESEARCH</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
              I surveyed retail clients with simple questions and received 115+ responses, highlighting needs like easier navigation, a best-sellers list, admin content access, and PDP improvements.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">DATA DECISIONS/NEXT STEPS</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
              Data showed the navigation was lacking and key retailer resources were hard to find, costing sales and support time. Mobile development began to streamline marketing and drive brand awareness and future D2C growth.
              </p>
            </div>

            <div>
              <div className="text-sm font-bold uppercase text-[#f2f2f2]">CONCLUSION</div>
              <p className="text-sm mt-2 leading-relaxed text-[#a6a6a6]">
              Post-launch, mobile traffic grew by 31.4%, retailer locator usage rose 27%, organic search improved 121%, and the mobile app saw strong adoption. Positive user feedback confirmed major UX gains. Ongoing SEO and exploring AR features are recommended next steps.
              </p>
            </div>
          </motion.div>
        </aside>

        <main className="flex-1 max-h-[calc(100vh-60px)] lg:overflow-y-auto py-10 px-6 space-y-10">
          <div className="space-y-10">
            {[
              [images[0], images[1]],
              [images[2], images[3]],
              [images[4], images[5], images[6]],
              [images[7], images[8]],
              [images[9], images[10]],
              [images[11], images[12]],
              [images[13], images[14], images[15]],
              [images[16]],
            ].map((group, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
                viewport={{ once: true }}
                className={`grid gap-6 ${
                  group.length === 1
                    ? 'grid-cols-1'
                    : group.length === 2
                    ? 'grid-cols-1 sm:grid-cols-2'
                    : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
                }`}
              >
                {group.map((img, i) => (
                  <div
                    key={i}
                    className="relative group rounded-lg overflow-hidden border border-[#2f2f2f] shadow-md"
                  >
                    <Image
                      src={img.src}
                      alt={img.title}
                      width={1600}
                      height={1000}
                      quality={100}
                      sizes="100vw"
                      className="w-full h-auto object-cover transition duration-300 group-hover:brightness-50 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-20">
                      <h3 className="text-lg font-bold text-white mb-1">{img.title}</h3>
                      <p className="text-sm text-gray-300">{img.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}