import { genPageMetadata } from 'app/seo'
import friendsInfo from '@/data/friends_info'
import Card from '@/components/Card'

export const metadata = genPageMetadata({ title: '朋友' })

export default function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            网上邻居
          </h1>
        </div>
        <div className="container">
          <div className="-m-4 flex flex-wrap">
            {friendsInfo.map((f) => (
              <Card
                key={f.link}
                title={f.siteName}
                description={f.description}
                imgSrc={f.cover}
                href={f.link}
                width={300}
                height={300}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
