import React from 'react';
import Navbar from './Navbar';
import players from '../assets/josh-and-matthew-cut.png'
import squad from '../assets/squad3.jpg'

const UPSL = () => {

  return (
    <div>
      <Navbar/>
      <header className=' relative h-[25rem] motorik-bg bg-no-repeat bg-cover bg-[center_top_-2rem] ml:bg-[center_top_-10rem] md:bg-[center_top_-5rem]'>
            <div className='h-24 bg-gray-800 w-4/5 sm:w-1/2 absolute bottom-20 sm:bottom-24 z-0'></div>
            <img className="h-auto sm:h-full md:h-full ml:h-full lg:h-full absolute z-10 bottom-0 sm:left-1/4" src={players} alt='players' />
            <h1 className='z-10 text-white uppercase px-8 text-4xl sm:text-7xl md:text-8xl ml:text-8xl absolute bottom-28 md:bottom-16 left-8 sm:left-16 font-bold'>
                Motorik FC UPSL
            </h1>
      </header>
      <div className="bg-white shadow-md rounded-lg p-10">

      <div className=' bg-white'>
          <div className='flex justify-center flex-wrap'>
            <div className='p-4 m-4 text-center sm:w-[450px] md:w-[500px] ml:w-half lg:w-half w-[300px]'>
              <img src={squad} className="w-full" alt="squad" />
            </div>
            <div className='p-4 m-4 text-center sm:w-[450px] md:w-[500px] ml:w-half lg:w-half w-[300px]'>
              <h3 className='capitalize text-gray-700 text-2xl sm:text-3xl ml:text-4xl lg:text-4xl font-bold'>The Beginning</h3>
              <p className='font-semibold my-6'> 
              Our Motorik FC UPSL team is a Semi-Pro Men's team that competes in the UPSL DMV South Division. This is a highly competitive team formed of talented soccer players from around the world who now live or grew up in the local area. 
              This will be our exhibition season in the UPSL where we will test our ability against other local competition in hopes of making it to the play-offs and moving on to the regional, and national finals.
              </p>
            </div>
          </div>
        </div>
        
        <h2 className='capitalize text-center text-gray-700 text-5xl mb-4 sm:text-6xl p-4 ml:text-7xl lg:text-7xl font-bold'>Roster</h2>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl mx-auto font-bold">GOALKEEPERS</h1>
        </div>
        <div className="flex flex-col">
          <div className="">
            <div className="py-2 align-middle inline-block min-w-full sm:px-26 lg:px-28">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className=" table-fixed min-w-full divide-gray-200 text-left">
                  <thead className="bg-mtk-blue/75">
                    <tr>
                      <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Club
                      </th>
                      <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Position
                      </th>
                      <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Age
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className=' min-w-full divide-y divide-gray-200 text-left'>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-400 rounded-full"></div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Mert Meric Sayili
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Motorik UPSL</div>
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Goalkeeper</div>
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">22</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl mx-auto font-bold pt-4">DEFENDERS</h1>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-26 lg:px-28">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className=" min-w-full divide-y divide-gray-200 text-left">
                  <thead className="bg-mtk-blue/75">
                    <tr>
                      <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Club
                      </th>
                      <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Position
                      </th>
                      <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Age
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-400 rounded-full"></div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Matt Steel
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Motorik UPSL</div>
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Defender</div>
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">24</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

                
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl mx-auto font-bold pt-4 ">MIDFIELDERS</h1>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-26 lg:px-28">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-mtk-blue/75">
                    <tr>
                      <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Club
                      </th>
                      <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Position
                      </th>
                      <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Age
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-400 rounded-full"></div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Erick Del Cid
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Motorik UPSL</div>
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Midfielder</div>
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">22</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

                
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl mx-auto font-bold pt-4 ">ATTACKERS</h1>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-26 lg:px-28">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-mtk-blue/75">
                    <tr>
                      <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Club
                      </th>
                      <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Position
                      </th>
                      <th scope="col" className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Age
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-400 rounded-full"></div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Terell Williamson
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Motorik UPSL</div>
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Attacker</div>
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="text-sm text-gray-900">22</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default UPSL;
