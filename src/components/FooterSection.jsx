import React from 'react';

export default function FooterSection() {
  return (
    <footer className="bg-gray-200">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between">
        {/* First Section (20%) */}
        <div className="w-full lg:w-1/5 bg-gray-400 text-white p-4">
          <h2 className="text-3xl">Contact</h2>
          <p className="mt-2">info@estimatedstocks.com</p>
          <p className="mt-3 font-bold mb-2">Visiting address</p>
          <p>Stockholm, Sweden</p>
        </div>

        {/* Second Section (80%) */}
        <div className="w-full lg:w-4/5 bg-gray-200 p-4">
          <div className="lg:hidden space-y-4">
            <div className="mb-4">
              <button className="text-lg font-semibold">About us</button>
              <hr className="my-4 border-t-2 border-gray-800" />
              <ul className="ml-4">
                <li>Our Strategy</li>
                <li>Business Areas</li>
                <li>Career</li>
                <li>Privacy notice</li>
              </ul>
            </div>

            <div className="mb-4">
              <button className="text-lg font-semibold">Our investments</button>
              <hr className="my-4 border-t-2 border-gray-800" />
              <ul className="ml-4">
                <li>Listed Companies</li>
                <li>Patricia Industries</li>
                <li>Investments in EQT</li>
              </ul>
            </div>

            <div className="mb-4">
              <button className="text-lg font-semibold">Sustainability</button>
              <hr className="my-4 border-t-2 border-gray-800" />
              <ul className="ml-4">
                <li>Climate & Resource</li>
                <li>Efficiency</li>
                <li>Diversity & Inclusion</li>
                <li>Business Ethics & Governance</li>
              </ul>
            </div>

            <div>
              <button className="text-lg font-semibold">Investors</button>
              <hr className="my-4 border-t-2 border-gray-800" />
              <ul className="ml-4">
                <li>News</li>
                <li>Events calendar</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <ul className="lg:flex space-x-4 hidden">
            {/* Dropdown for Heading 1 */}
            <li className="flex-1">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">About us</h3>
                <hr className="my-4 border-t-2 border-gray-800" />
                <ul className="ml-4">
                <li>Our Strategy</li>
                <li>Business Areas</li>
                <li>Career</li>
                <li>Privacy notice</li>
                </ul>
              </div>
            </li>

            {/* Dropdown for Heading 2 */}
            <li className="flex-1">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Our investments</h3>
                <hr className="my-4 border-t-2 border-gray-800" />
                <ul className="ml-4">
                <li>Listed Companies</li>
                <li>Patricia Industries</li>
                <li>Investments in EQT</li>
                </ul>
              </div>
            </li>

            {/* Dropdown for Heading 3 */}
            <li className="flex-1">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Sustainability</h3>
                <hr className="my-4 border-t-2 border-gray-800" />
                <ul className="ml-4">
                <li>Climate & Resource</li>
                <li>Efficiency</li>
                <li>Diversity & Inclusion</li>
                <li>Business Ethics & Governance</li>
                </ul>
              </div>
            </li>

            {/* Dropdown for Heading 4 */}
            <li className="flex-1">
              <div>
                <h3 className="text-lg font-semibold">Investors</h3>
                <hr className="my-4 border-t-2 border-gray-800" />
                <ul className="ml-4">
                <li>News</li>
                <li>Events calendar</li>
                <li>Contact</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
