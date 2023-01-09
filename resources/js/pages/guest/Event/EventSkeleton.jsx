import React, { useState } from 'react'

//styles
import './Event.scss'

//components
import { SectionEvent } from './SectionEvent/SectionEvent'
import InputTime from '../../../components/atoms/InputTime/InputTime'
import InputText from '../../../components/atoms/InputText/InputText'
import InputNumber from '../../../components/atoms/InputNumber/InputNumber'
import CheckboxCircle from '../../../components/atoms/CheckBoxCircle/CheckboxCircle'
import { Carousel } from 'primereact/carousel';
import TextArea from '../../../components/atoms/TextArea/TextArea'
import { Skeleton } from 'primereact/skeleton'

const EventSkeleton = () => {

  const data = [
    {
      leftImg: false
    },
    {
      leftImg: true
    },
    {
      leftImg: false
    },
    {
      leftImg: true
    }
  ]

  const imgs = [1, 2, 3, 4, 5, 6, 7]

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '968px',
      numVisible: 1,
      numScroll: 1
    },
  ];

  const productTemplate = (product) => {
    return (
      <div className="product-item">
        <Skeleton width='100%' height='100%' />
      </div>
    );
  }

  const [products, setProducts] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])


  const [checkList, setCheckList] = useState([
    1, 2, 3, 4, 5, 6
  ])

  return (
    <div className='event'>
      <div className='sections s1'>
        <div className='s1-left'>
          <div className='s1-left-images'></div>
          <div className='hidden'>
          <Skeleton width='50%' height='44px' />
          </div>
        </div>
        <div className='s1-right'>
          <Skeleton width='40%' height='100px' />
          <Skeleton width='30%' height='80px' />
          <Skeleton width='80%' height='40px' />
          <div className='button'>
            <Skeleton width='100%' height='100%' borderRadius='30px'/>
          </div>
          <div className='button'>
            <Skeleton width='100%' height='100%' borderRadius='30px' />
          </div>

          <Skeleton width='40%' height='44px' />
        </div>
      </div>

      <div>
        {
          data.map((item, idx) => (
            <SectionEvent skeleton data={item} key={idx} />
          ))
        }
      </div>

      <div className='sections s2'>
        <div className='s2-left'>
          <div className='imgContainer'>

          </div>
          <div className='name'>
            <Skeleton width='100px' height='30px' />
            <div>
              <Skeleton width='100px' height='22px' />
              <ul>
                <Skeleton width='100px' height='22px' />
                <Skeleton width='100px' height='22px' />
              </ul>
            </div>
          </div>
        </div>
        <div className='s2-right'>
          <div className='container'>
            <Skeleton width='100px' height='22px' />
            <div className='containerPrices'>
              <Skeleton width='50px' height='50px' shape='circle' />
              <div>
                <Skeleton width='100px' height='22px' />
                <Skeleton width='100px' height='22px' />
              </div>
            </div>
            <div className='containerPrices'>
              <Skeleton width='50px' height='50px' shape='circle' />
              <div>
                <Skeleton width='100px' height='22px' />
                <Skeleton width='100px' height='22px' />
              </div>
            </div>
            <div className='containerPrices'>
              <Skeleton width='50px' height='50px' shape='circle' />
              <div>
                <Skeleton width='100px' height='22px' />
                <Skeleton width='100px' height='22px' />
              </div>
            </div>

            <Skeleton width='100px' height='22px' />
            <Skeleton width='100px' height='22px' />
            <Skeleton width='100px' height='22px' />

          </div>
        </div>

      </div>

      <div className='sections s3'>
        <div className='s3-left'>
          <Skeleton width='100px' height='22px' />
          <Skeleton width='100px' height='22px' />

          <div className='imgContainerAll'>

            {
              imgs.map((item, idx) => (
                <div key={idx} className='imgContainer'>
                  <Skeleton width='100px' height='100px' />
                </div>
              ))
            }

          </div>

        </div>
        <div className='s3-right'>
          <Skeleton width='100px' height='22px' />
          <Skeleton width='100px' height='22px' />

          <form className='form'>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <Skeleton width='50%' height='45px' />

              <InputTime className={'ml-10 w-30'} skeleton />
            </div>
            <InputText className={'mt-20'} skeleton />
            <div className='d-flex mt-20'>
              <InputText className={'w-40'} skeleton />
              <InputNumber className={'w-40 ml-10'} skeleton />
            </div>
            <InputText className={'mt-20'} skeletons />
            <div className='d-flex mt-20'>
              <InputNumber skeleton />
              <div className='ml-10'>
                <Skeleton width='100px' height='22px' />
                {
                  checkList.map((item, idx) => (
                    <CheckboxCircle key={idx} className={'check'} skeleton></CheckboxCircle>
                  ))
                }
              </div>
            </div>
            <TextArea className={'mt-20'} skeleton />
            <Skeleton width='100%' height='45%' borderRadius='20px' />
          </form>


        </div>

      </div >
      <div className='s4'>
        <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate} />
      </div>

    </div >
  )
}

export default EventSkeleton
