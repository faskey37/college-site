import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/style.css'
import '../styles/global.css'

export default function ScrollToTop(){
  const { pathname } = useLocation()
  useEffect(()=>{ window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return null
}