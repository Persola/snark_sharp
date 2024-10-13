function valueToHex(value: number) {
  const clampedValue = Math.max(0, Math.min(1, value));
  const scaledValue = Math.round(clampedValue * 255);
  return scaledValue.toString(16).padStart(2, '0');
}

const Dots = (props: { dotCount: number, dotColor: string }) => {
  const { dotCount, dotColor } = props;

  console.log('SDFSEFSDFFD');
  console.log(dotColor);

  return (
    <div style={{
      // pos
      position: 'absolute',
      // centering
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      // other
      // border: '1px solid #eee'
    }}>
      {/* <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',
        gridAutoRows: '1fr',
        gap: '10px',
        width: '400px',
        height: '400px',
        padding: '10px'
      }}> */}
        {Array.from({ length: dotCount }).map((_, dotIndex) => {
          const f = (dotIndex / dotCount);

          // const rot1 = valueToHex(f);
          // const rot2 = valueToHex((((Math.sin(f) * 3) + 1) % 3) / 3);
          // const rot3 = valueToHex((((Math.sin(f**2) * 3) + 2) % 3) / 3);

          const dist = (dotCount * 20) + 20;
          const xFactor = 3;
          const spin = 2;
          const x = Math.sin(f * Math.PI * spin + 1) * dist * xFactor;
          const y = Math.cos(f * Math.PI * spin) * dist;

          return (
            <div key={dotIndex}>
              <div key={dotIndex} style={{
                backgroundColor: dotColor,
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                border: '2px solid black',
                margin: '10px'
                //
                // position: 'relative',
                // left: `${x}px`,
                // top: `${y}px`
              }} />
            </div>
          );
        })}
      {/* </div> */}
    </div>
  );
}

export default Dots;
