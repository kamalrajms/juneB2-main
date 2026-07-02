import React, { useRef, useState, useEffect } from "react";

export default function UseRefHook() {
  // eg1
  const inputRef = useRef();
  const focusinput = () => {
    inputRef.current.focus();
  };
  //   eg2
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((perv) => perv + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  //   eg3

  const [newProduct, setNewProduct] = useState(true);
  const [imgURL, setImgUrl] = useState("");
  const imgRef = useRef(0);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImgUrl(preview);
      setNewProduct(false);
    }
  };
  return (
    <div>
      {/* eg1 */}
      <nav>
        <input type="text" ref={inputRef} />
        <button onClick={focusinput}>focus input</button>
      </nav>
      {/* eg2 */}
      <nav>
        <p>Timer:{sec}</p>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
      </nav>
      {/* eg3 */}
      <nav>
        <input
          type="file"
          ref={imgRef}
          accept="image/*"
          hidden
          onChange={handleChange}
        />
        {newProduct ? (
          <div className="org-image" onClick={() => imgRef.current.click()}>
            upload img
          </div>
        ) : (
          <img
            src={imgURL}
            alt=""
            className="image"
            onClick={() => imgRef.current.click()}
          />
        )}
      </nav>
    </div>
  );
}
