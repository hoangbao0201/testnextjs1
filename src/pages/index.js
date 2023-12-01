import Header from '@/components/Partials/header'
import axios from 'axios';
import { Inter } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link'
import { useEffect, useState } from 'react'


export default function Home() {
  const [listNovel, setListNovel] = useState([]);
  const handleGetNovels = async () => {
    console.log("run")
    try {
      const novelsRes = await axios.get("https://hobanovel-be.azurewebsites.net/api/novels/get/outstanding");
      console.log(novelsRes.data.novels)
      setListNovel(novelsRes.data.novels);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    handleGetNovels()
  }, [])

  return (
    <div>
      <Header a={3}>{}</Header>
      <div>
        {
          listNovel.map((item, index) => {
            return (
              <div key={index} className='flex'>
                <Image
                  width={500}
                  height={500}
                  alt='ảnh'
                  src={item.thumbnailUrl}
                  className='w-20 h-24 block object-cover'
                />
                <div>
                  <h3>{item.title}</h3>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
