/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `dark` : `light`)
  }

  return (
    <Box as="footer" variant="footer">

      Copyright &copy; {new Date().getFullYear()}.
      All rights reserved.
      <br />
      <OutboundLink href="/">Home</OutboundLink> &nbsp; &nbsp;
      <OutboundLink href="/terms">Terms</OutboundLink>
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
      </Flex>
    </Box>
  )
}

export default Footer
