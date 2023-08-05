import Client from '@/app/client-template';
import Section from '@/components/section';
import TitleBuilder from "@/components/TitleBuilder";
import React from 'react';
import YoutubeLoader from '@/components/YoutubeLoader';
import OurTeam from '@/components/OurTeam';

const ourTeamData = [
  {
    name: "John Doe",
    designation: "CEO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales sapien eget nisi tincidunt, nec faucibus tortor congue."
  },
  {
    name: "Jane Doe",
    designation: "CTO",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales sapien eget nisi tincidunt, nec faucibus tortor congue."
  },
  {
    name: "Alex Smith",
    designation: "Designer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales sapien eget nisi tincidunt, nec faucibus tortor congue."
  },
  {
    name: "Emma Johnson",
    designation: "Developer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales sapien eget nisi tincidunt, nec faucibus tortor congue."
  }
]

export default function AboutPage() {
  return (
    <Client>
      <main className='nt-main p-2'>
        <Section sectionName='inner-page-hero' span={[12]} className='pt-28 rounded'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-6'>
                    <div className="nt-component nt-story">
                        <h2 className="text-3xl font-bold mb-4">Welcome to our company</h2>
                        <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales sapien eget nisi tincidunt, nec faucibus tortor congue.
                        </p>
                    </div>
                </div>
                <div className='col-span-6'>
                    <div className="nt-component nt-story">
                        <YoutubeLoader path="u0rLb7TT5GY"/>
                    </div>
                </div>
            </div>
        </Section>
        
        <Section sectionName='our-team' span={[12, 12]} className=''>
          {[
            <div key='our-team-a'>
              <h3>Meet our team</h3>
            </div>,
            <div key='our-team-b'>
              <OurTeam teamMembers={[
                {
                  name: "Member one",
                  image: "https://placehold.co/400"
                },
                {
                  name: "Member two",
                  image: "https://placehold.co/400"
                },
                {
                  name: "Member three",
                  image: "https://placehold.co/400"
                },
                {
                  name: "Member three",
                  image: "https://placehold.co/400"
                },
              ]}/>
            </div>
          ]}
        </Section>

        <Section sectionName='image-text-section' span={[12]} className='nt-section'>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img src="https://picsum.photos/300/200" alt="Image" className="w-full h-auto" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Section Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales sapien eget nisi tincidunt, nec faucibus tortor congue.
              </p>
            </div>
          </div>
        </Section>
      </main>
    </Client>
  )
}
