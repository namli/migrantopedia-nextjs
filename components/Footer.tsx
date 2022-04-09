import React from 'react'
import useDarkMode from '@fisch0920/use-dark-mode'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare'
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import * as config from 'lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const darkMode = useDarkMode(false, { classNameDark: 'dark-mode' })

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      darkMode.toggle()
    },
    [darkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2022 {config.author}</div>

      <div className={styles.settings}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
          >
            {darkMode.value ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        )}
      </div>

      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
        )}

        {config.facebook && (
          <a
            className={styles.facebook}
            href={`https://www.facebook.com//${config.facebook}`}
            title={`facebook @${config.facebook}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebookSquare />
          </a>
        )}

        {config.instagram && (
          <a
            className={styles.instagram}
            href={`https://www.instagramm.com/${config.instagram}`}
            title={`instagram @${config.instagram}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagramSquare />
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
