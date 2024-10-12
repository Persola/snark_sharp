const Dots = (props: { dotCount: number }) => {
  const { dotCount } = props;

  return (
    <div style={{
      // pos
      position: 'absolute',
      // centering
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      // other
      backgroundColor: '#b94',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',
        gridAutoRows: '1fr',
        gap: '10px',
        width: '400px',
        height: '400px',
        backgroundColor: 'lightgray',
        padding: '10px'
      }}>
        {Array.from({ length: dotCount }).map((_, __) => (
          <div style={{
            backgroundColor: 'black',
            borderRadius: '50%',
            width: '100%',
            height: '100%',
          }}></div>      
        ))}
      </div>
    </div>
  );
}

export default Dots;
