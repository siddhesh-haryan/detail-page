'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Technology {
  name: string
  logo: string
}

interface TechnologyGroup {
  title: string
  items: Technology[]
}

interface TabContent {
  title: string
  content: TechnologyGroup[]
}

interface TechnologyStackProps {
  tabs: TabContent[]
}

export default function TechnologyStack({ tabs }: TechnologyStackProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">ERP Technology Stack We Use</h1>
      <p className="text-center mb-8">
        Our experts are proficient in all the cutting-edge technologies required to build the most effective ERP system.
      </p>

      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md ${
              activeTab === index
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-primary/90 hover:text-primary-foreground'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="bg-card text-card-foreground rounded-lg p-6">
        {tabs[activeTab].content.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-8 last:mb-0">
            {group.title && (
              <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {group.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex flex-col items-center">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="mb-2"
                  />
                  <span className="text-sm text-center">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Dummy data
const dummyData: TabContent[] = [
  {
    title: 'Frontend Programming Languages',
    content: [
      {
        title: 'Languages',
        items: [
          { name: 'CSS', logo: '/placeholder.svg?height=50&width=50' },
          { name: 'HTML', logo: '/placeholder.svg?height=50&width=50' },
          { name: 'JavaScript', logo: '/placeholder.svg?height=50&width=50' },
        ]
      },
      {
        title: 'JavaScript Frameworks',
        items: [
          { name: 'Angular', logo: '/placeholder.svg?height=50&width=50' },
          { name: 'React', logo: '/placeholder.svg?height=50&width=50' },
          { name: 'Vue.js', logo: '/placeholder.svg?height=50&width=50' },
          { name: 'Ember', logo: '/placeholder.svg?height=50&width=50' },
          { name: 'Meteor', logo: '/placeholder.svg?height=50&width=50' },
          { name: 'Next.js', logo: '/placeholder.svg?height=50&width=50' },
        ]
      }
    ]
  },
  {
    title: 'Mobile Technologies',
    content: [
      {
        title: 'Mobile Frameworks',
        items: [
          { name: 'Android', logo: '/placeholder.svg?height=50&width=50' },
          { name: 'Cordova', logo: '/placeholder.svg?height=50&width=50' },
          { name: 'Flutter', logo: '/placeholder.svg?height=50&width=50' },
          { name: 'PWA', logo: '/placeholder.svg?height=50&width=50' },
          { name: 'iOS', logo: '/placeholder.svg?height=50&width=50' },
          { name: 'React Native', logo: '/placeholder.svg?height=50&width=50' },
        ]
      }
    ]
  }
]

export function TechStackPage() {
  return <TechnologyStack tabs={dummyData} />
}
