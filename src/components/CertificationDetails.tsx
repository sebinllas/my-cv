interface Certification {
  id: string;
  url: string;
}
export const CertificationDetails = ({ id, url }: Certification) => {
  return (
    <>
      <span>Credential Id: {id}</span>
      <br />
      <span>
        <a
          href={url}
          target='_blank'
          rel='noreferrer'
          className='text-primary underline'
        >
          Show Credential
        </a>
      </span>
    </>
  );
};
