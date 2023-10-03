import { CertificationDetails } from './CertificationDetails';
import { EducationItem } from './EducationItem';
import { type EducationItem as EducationItemType } from '@/types/EducationItem';

const formatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  year: 'numeric',
});

export const EducationItemsList = () => {
  return (
    <div className='bg-white divide-neutral-200 divide-y p-10'>
      {certifications.map((certification) => (
        <EducationItem
          key={certification.name}
          date={certification.date}
          name={certification.name}
          institution={certification.institution}
          aptitude={certification.aptitude}
          details={certification.details}
        />
      ))}
    </div>
  );
};

const certifications: EducationItemType[] = [
  {
    name: 'Ingeniería de Sistemas',
    institution: 'UdeA',
    date: '2018 - present',
    aptitude: 'Software engineering degree',
    details: (
      <span>
        Currently in the ninth semester, I expect to graduate next year.
      </span>
    ),
  },
  {
    name: 'Curso Profesional de Git y GitHub',
    institution: 'Platzi',
    date: formatter.format(new Date(2022, 11)),
    aptitude: 'Git y GitHub',
    details: (
      <CertificationDetails
        id='81e1d4ce-fdf6-4068-bafb-c1d7b2e10c4c'
        url='https://platzi.com/p/sebinllas/curso/2405-git-github-appsco/diploma/detalle/'
      />
    ),
  },
  {
    name: 'Curso de React Avanzado',
    institution: 'Platzi',
    date: formatter.format(new Date(2022, 2)),
    aptitude: 'React.js',
    details: (
      <CertificationDetails
        id='61588c68-a30b-447c-bb94-la80ca8b1cda'
        url='https://platzi.com/p/sebinllas/curso/1601-react-avanzado/diploma/detalle/'
      />
    ),
  },

  {
    name: 'Curso de React.js',
    institution: 'Platzi',
    date: formatter.format(new Date(2021, 2)),
    aptitude: 'React.js',
    details: (
      <CertificationDetails
        id='e6fd8e6a-bd81-475b-96c3-92025a6d5bd5'
        url='https://platzi.com/p/sebinllas/curso/1548-react-2019/diploma/detalle/'
      />
    ),
  },
];
