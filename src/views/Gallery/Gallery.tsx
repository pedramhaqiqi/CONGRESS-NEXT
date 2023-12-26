import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  SpaceProps,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import React from 'react'

import SmallArticle from '../components/ArticleSmall'
import NavBar from '../components/NavBar'
import RecentHearing from './components/HeroBanner'

const RequestBodySingle = {
  message: 'success',
  data: {
    title: 'Bill S-222, An Act to amend the Income Tax Act (use of resources)',
    date: 'June 1, 2021',
    session: '43-2',
    url: 'https://sencanada.ca/en/Content/Sen/Committee/432/NFFN/26EV-55252-E',
    photo:
      'https://cdn.discordapp.com/attachments/993702831850786886/1032528642426798170/blank_tradingcard2.jpg',
    summary: [
      '     Bill S-222 will provide accountability, but also effective partnership and empowerment.    ',
      '     The CRA is looking to modernize the legal fiction that requiring programs to be the “own activities” of the funding charity.    ',
      '     Cooperation Canada is speaking on behalf of 90 organizations working in the humanitarian and development context here in Canada and abroad.    ',
      '     The CRA will define what is a reasonable resource accountability.    ',
    ],
    tags: ['CHARITY', 'TAX'],
  },
}

const FinalBody = {
  data: [
    {
      title:
        'Supplementary Estimates (A) for the fiscal year ending March 31, 2022',
      date: 'June 8, 2021',
      session: '43-2',
      url: 'https://sencanada.ca/en/Content/Sen/Committee/432/NFFN/29EV-55271-E',
      photo:
        'https://cdn.discordapp.com/attachments/993702831850786886/1032534338128060447/blank_tradingcard1.jpg',
      tags: ['HOUSING', 'SENIORS'],
      summary: [
        'Budget 2021 announced a one-time payment of $500 to seniors aged 75 and over to meet their immediate needs. These estimates include $1.69 billion in voted appropriations and $1.67 billion in statutory appropriations to process this payment in August 2021.',
        'The $1.5 billion announced in the Fall Economic Statement will help address the housing crisis in communities across the country',
        'CMHC has been responsible for the delivery of the National Housing Strategy, which is a $70-billion-plus investment by the federal government.',
        "CMHC's study on the causes of house price escalation is still relevant.",
      ],
    },
    {
      title:
        'Supplementary Estimates (A) for the fiscal year ending March 31, 2022',
      date: 'June 3, 2021',
      session: '43-2',
      url: 'https://sencanada.ca/en/Content/Sen/Committee/432/NFFN/27EV-55260-E',
      photo:
        'https://cdn.discordapp.com/attachments/993702831850786886/1032528642791723008/blank_tradingcard4.jpg',
      tags: ['COVID-19', 'MONEY'],
      summary: [
        'The government has provided more information than usual on COVID-19 spending.',
        'The Department of Finance is instrumental in Canada’s COVID-19 Economic Response Plan',
        'The $29.5 billion is for items in the budget',
        'The $467.6 million is not for vaccine purchase, it is for vaccine development. ',
      ],
    },
    {
      title:
        'Bill S-222, An Act to amend the Income Tax Act (use of resources)',
      date: 'June 1, 2021',
      session: '43-2',
      url: 'https://sencanada.ca/en/Content/Sen/Committee/432/NFFN/26EV-55252-E',
      photo:
        'https://cdn.discordapp.com/attachments/993702831850786886/1032528656133791805/blank_tradingcard22.jpg',
      tags: ['CHARITY', 'TAX'],
      summary: [
        'Bill S-222 will provide accountability, but also effective partnership and empowerment.',
        'The CRA is looking to modernize the legal fiction that requiring programs to be the “own activities” of the funding charity.',
        'Cooperation Canada is speaking on behalf of 90 organizations working in the humanitarian and development context here in Canada and abroad.',
        'The CRA will define what is a reasonable resource accountability. ',
      ],
    },
    {
      title:
        'The subject matter of all of Bill C-30, Budget Implementation Act, 2021, No. 1',
      date: 'May 18, 2021',
      session: '43-2',
      url: 'https://sencanada.ca/en/Content/Sen/Committee/432/NFFN/21EV-55231-E',
      photo:
        'https://cdn.discordapp.com/attachments/993702831850786886/1032528643055947886/blank_tradingcard7.jpg',
      tags: ['COVID-19', 'ECONOMY'],
      summary: [
        'The government has not extended COVID support programs to new businesses.',
        'The IGF will increase AFI lending by $75 million annually',
        'The federal government cannot keep growing the deficit unconditionally.',
        'The budget should expand the capital cost allowance system to publicly traded companies.',
      ],
    },
    {
      title:
        'Study on the government’s response to the COVID-19 pandemic and its economic consequences',
      date: 'June 22, 2020',
      session: '43-1',
      url: 'https://sencanada.ca/en/Content/Sen/Committee/431/NFFN/17EV-55000-E',
      photo:
        'https://cdn.discordapp.com/attachments/993702831850786886/1032528643349557279/blank_tradingcard9.jpg',
      tags: ['COVID-19', 'STUDENTS'],
      summary: [
        'The government is being disingenuous.',
        'The national unemployment rate is 19%.',
        'The federal government is not tracking the unemployment rate accurately.',
        'Canada is working on ways to help international students. ',
      ],
    },
    {
      title:
        'Supplementary Estimates (A) for the fiscal year ending March 31, 2021',
      date: 'June 18, 2020',
      session: '43-1',
      url: 'https://sencanada.ca/en/Content/Sen/Committee/431/NFFN/16EV-54998-E',
      photo:
        'https://cdn.discordapp.com/attachments/993702831850786886/1032528643722842122/blank_tradingcard11.jpg',
      tags: ['COVID-19', 'INDIGENOUS'],
      summary: [
        'ISED is requesting additional authorities of $628.4 million.',
        'The $2.3 billion increase to PHAO funding is to support the second phase of Canada’s medical countermeasures response to COVID-19.',
        '$305M in distinction-based funding for the Indigenous Community Support Fund',
        'The $468 million is to support the Canadian Human Rights Tribunal rulings. ',
      ],
    },
    {
      title:
        'Study on the government’s response to the COVID-19 pandemic and its economic consequences',
      date: 'May 26, 2020',
      session: '43-1',
      url: 'https://sencanada.ca/en/Content/Sen/Committee/431/NFFN/12EV-54982-E',
      photo:
        'https://cdn.discordapp.com/attachments/993702831850786886/1032528644045819924/blank_tradingcard13.jpg',
      tags: ['ECONOMY', 'TAX'],
      summary: [
        'The deficit is $252 billion.',
        'The deficit will rise to $260 billion in the June fiscal update.',
        'The government is not considering any new taxes',
        'The government could decide to let programs expire, or increase taxes to reduce the deficit.',
      ],
    },
    {
      title:
        'The subject matter of Bill C-101, An Act to amend the Customs Tariff and the Canadian International Trade Tribunal Act',
      date: 'June 19, 2019',
      session: '42-1',
      url: 'https://sencanada.ca/en/Content/Sen/Committee/421/NFFN/99EV-54921-E',
      photo:
        'https://cdn.discordapp.com/attachments/993702831850786886/1032528644343603261/blank_tradingcard14.jpg',
      tags: ['EXPORT', 'MARKET'],
      summary: [
        'Bill C-13 would temporarily remove the two-year moratorium on the imposition of safeguards for products that were recently subject to such measures.',
        'Canada has imposed tariffs on aluminum exports to the US.',
        'Bill C-15 will be amended to allow the government to extend the two-year moratorium on drug patents for two more years.',
        'Anti-dumping measures are in place to protect a market from unfair trade.',
      ],
    },
    {
      title:
        'The subject matter of all of Bill C-97, Budget Implementation Act, 2019, No. 1 ',
      date: 'June 5, 2019',
      session: '42-1',
      url: 'https://sencanada.ca/en/Content/Sen/Committee/421/NFFN/97EV-54861-E',
      photo:
        'https://cdn.discordapp.com/attachments/993702831850786886/1032528641533419570/blank_tradingcard15.jpg',
      tags: ['BUSINESS', 'TAX'],
      summary: [
        'Trudeau is talking about small business tax cuts.',
        'We’re going to help Canadians in the future to get the training they need to continually excel in their current jobs or to prepare for new ones.',
        'The government has reported to Canadians',
        'Trudeau is focused on how to make sure that prosperity in Canada is shared with the broadest possible cross-section of Canadians.',
      ],
    },
    {
      title:
        'The subject matter of all of Bill C-97, Budget Implementation Act, 2019, No. 1',
      date: 'May 30, 2019 ',
      session: '42-1',
      url: 'https://sencanada.ca/en/Content/Sen/Committee/421/NFFN/96EV-54841-E',
      photo:
        'https://cdn.discordapp.com/attachments/993702831850786886/1032528656658075719/blank_tradingcard.jpg',
      tags: ['CARBON', 'VEHICLE'],
      summary: [
        "The Canadian Vehicle Manufacturers Association appreciates the government's commitments in Budget 2019 to invest in the future transportation and to make plug-in electric vehicles more affordable through the iZEV program.",
        'Electric vehicles are the most promising technology to address carbon pollution in transportation.',
        'EMC is the only national organization dedicated exclusively to accelerating the electrification of all modes of transportation and represents the complete value chain of this growing industry in Canada.',
        'The $10,000 loss per electric vehicle is due to the fact that the car is more expensive and the battery is more expensive.',
      ],
    },
    {
      title:
        'Subject matter of Bill C-59, Economic Action Plan 2015 Act, No. 1',
      date: 'June 4, 2015',
      session: '41-2',
      url: 'https://sencanada.ca/en/Content/Sen/Committee/412/NFFN/33EV-52208-E',
      photo:
        'https://cdn.discordapp.com/attachments/993702831850786886/1032528641793474631/blank_tradingcard19.jpg',
      tags: ['FIRST NATION', 'VETERANS'],
      summary: [
        'The government has a plan to support veterans',
        'The Veterans Subcommittee is studying post-traumatic stress and will report to the Finance Committee',
        'There are 138 First Nations participating in the FMA.',
        'The chairs of the three key authorities who appeared before the committee were satisfied with the amendments.',
      ],
    },
    {
      title:
        'Subject matter of Bill C-59, Economic Action Plan 2015 Act, No. 1 ',
      date: 'May 27, 2015',
      session: '41-2',
      url: 'https://sencanada.ca/en/Content/Sen/Committee/412/NFFN/32EV-52160-E',
      photo:
        'https://cdn.discordapp.com/attachments/993702831850786886/1032528655672426526/blank_tradingcard20.jpg',
      tags: ['ECONOMY', 'DEFICIT'],
      summary: [
        'The $3 billion in the reserve is not excluded from the deficit.',
        'This bill would not allow the federal government to spend more than it takes in.',
        'Bill C-59 introduces amendments to the Industrial Design Act, the Patent Act and the Trade-marks Act and to provide for the correction of obvious errors, the extension of time limits to avoid an inadvertent loss of rights in the event of force majeure circumstances',
        'Bill C-11 adds a new provision to the Patent Act to protect communications between clients and their patent agents in the same way as solicitor-client privilege.',
      ],
    },
    {
      title:
        'Supplementary Estimates (A) for the fiscal year ending March 31, 2016 ',
      date: 'May 27, 2015',
      session: '41-2',
      url: 'https://sencanada.ca/en/Content/Sen/Committee/412/NFFN/33EV-52208-E',
      photo:
        'https://cdn.discordapp.com/attachments/993702831850786886/1032528655890513960/blank_tradingcard21.jpg',
      tags: ['PARKS', 'BUDGET'],
      summary: [
        'Parks Canada is receiving $2.6 billion in infrastructure investments.',
        'The reserve is not to be included in the budgetary balance that is referred to within this act.',
        'Parks Canada spends about $30.2 million a year on advertising.',
        'The Trans-Canada Highway in Banff has been twinned.',
      ],
    },
    {
      title:
        'Bill S-217, An Act to amend the Financial Administration Act (borrowing of money)',
      date: 'June 12, 2013',
      session: '41-1',
      url: 'https://sencanada.ca/en/Content/Sen/Committee/411/NFFN/43EV-50238-E',
      photo:
        'https://cdn.discordapp.com/attachments/993702831850786886/1032528656133791805/blank_tradingcard22.jpg',
      tags: ['FINANCE', 'COVID-19'],
      summary: [
        "The government says the changes help deal with emergencies. Is there no better time for Parliament to be recalled? It is clear to me that an emergency would seem to be an appropriate use of Parliament's time. After all, is it not our job to guide our country",
        'The government can recall Parliament at any time.',
        'The public accounts are more detailed.',
        'The COVID-19 pandemic has revealed the fragility of the global financial system.',
      ],
    },
    {
      title:
        'The subject-matter of Bill C-60, An Act to implement certain provisions of the budget',
      date: 'May 29, 2013',
      session: '41-1',
      url: 'https://sencanada.ca/en/Content/Sen/Committee/411/NFFN/41EV-50187-E',
      photo:
        'https://cdn.discordapp.com/attachments/993702831850786886/1032528656414822461/blank_tradingcard23.jpg',
      tags: ['TREASURY', 'UNION'],
      summary: [
        'Treasury Board has not provided a collective bargaining mandate to a specific Crown corporation',
        'The government has a pattern of mandating what it wants from the unions.',
        'The amendments to the First Nations Fiscal and Statistical Management Act are meant to allow for funding to be paid out on the requisition of the Minister of Aboriginal Affairs and Northern Development.',
        'The initial recipients of the federal money tend to be the provinces and territories.',
      ],
    },
  ],
}

interface IBlogTags {
  tags: Array<string>
  color1?: string
  color2?: string
  marginTop?: SpaceProps['marginTop']
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

const BlogTagsDefined: React.FC = () => {
  return (
    <HStack spacing={2} marginTop={2}>
      <Tag size={'md'} variant="solid" bg="purple.400">
        TAXATION
      </Tag>
      <Tag size={'md'} variant="solid" bg="teal.400">
        FINANCE
      </Tag>
    </HStack>
  )
}

interface BlogAuthorProps {
  date: Date
  name: string
}

const Application = () => {
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <Container maxW={'7xl'} p="12">
        <RecentHearing
          title={RequestBodySingle.data.title}
          tags={RequestBodySingle.data.tags}
          article={RequestBodySingle.data.summary}
          date={RequestBodySingle.data.date}
          image={RequestBodySingle.data.photo}
        ></RecentHearing>
        <Heading as="h2" marginTop="5">
          Latest Hearings:
        </Heading>
        <Divider marginTop="5" />
        <Wrap spacing="30px" marginTop="5">
          {FinalBody.data.map((article) => (
            <SmallArticle
              title={article.title}
              link={article.url}
              tags={article.tags}
              date={article.date}
              summary={article.summary}
              image={article.photo}
              key={article.session}
            ></SmallArticle>
          ))}
        </Wrap>
      </Container>
    </ChakraProvider>
  )
}

export default Application
