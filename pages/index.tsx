import Head from 'next/head'
import {Box} from "@chakra-ui/react";
import {TraitSelector} from "../components/TraitSelector";
import {SummaryTable} from "../components/SummaryTable";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Team fight Tactics Traits Calculator Set 8.5</title>
        <meta name='keywords' content='Teamfight Tactics Traits Calculator Set 8.5 League of Legends'/>
        <meta name='description'
              content='Tap the traits your opponents have to see which trait is the least collectible'/>
        <link rel="icon" href="/favicon.svg"/>
      </Head>

      <TraitSelector/>
      <SummaryTable/>
    </Box>
  )
}
