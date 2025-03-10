import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="NBA champion">
    <Container>
      <Title>
        NBA champion <Badge>2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/amembo_icon.png" alt="icon" />
      </Center>
      <P>
        Course project of Data and Visual Analytics
      </P>
      <UnorderedList ml={4} my={4}>
        <ListItem>ファイル転送がサイズ制限無く高速に出来ます。</ListItem>
        <ListItem>複数のコンピュータ間で同時に通信が出来ます。</ListItem>
        <ListItem>
          簡単接続機能により、面倒な接続作業を自動で行います。
        </ListItem>
        <ListItem>
          一つのポート開放だけで、様々な通信が出来る強力なプロトコル。
        </ListItem>
        <ListItem>
          IM機能を装備しています。会話中に写真を表示したりもできます。
        </ListItem>
        <ListItem>
          ファイル共有機能で、設定した公開フォルダを相手に見せることが出来ます。
        </ListItem>
        <ListItem>MSN/Windowsメッセンジャーからの招待で接続できます。</ListItem>
        <ListItem>
          画面転送機能で、相手に自分のデスクトップを見せることが出来ます。
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>desktop/mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Chakra UI, D3.js</span>
        </ListItem>
        <ListItem>
          <Meta>Source code</Meta>
          <Link href="https://github.com/mori913/NBA">readme</Link>
        </ListItem>
        <ListItem>
          <Meta>Poster</Meta>
          <Link href="https://w.atwiki.jp/amembo/"></Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>


      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/amembo_01.gif" alt="amembo" />
        <WorkImage src="/images/works/amembo_02.gif" alt="amembo" />
      </SimpleGrid>
      <WorkImage src="/images/works/amembo_03.jpg" alt="amembo" />
      <WorkImage src="/images/works/amembo_04.jpg" alt="amembo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
