import "../../css/index.css"

interface ModalProps{
      isOpen? : boolean;
      onClose? : () => void;
}

const Modal = ({onClose, isOpen}: ModalProps) =>{
      if (!isOpen) return null;

      return (
        <>
          <div className=" fixed inset-0 z-30 flex justify-center items-center">
            <div
              className=" absolute inset-0 bg-black opacity-50"
              onClick={onClose}
            />
            <div className=" relative z-10 h-full max-h-[300px] w-full max-w-96 overflow-y-auto bg-amber-50 p-6 md:rounded-lg">
              <div className="mb-6 border-b border-zinc-600 py-6 text-center">
                <div className="mt-6">
                  <h2 className=" text-3xl font-semibold text-zinc-600">
                    nigger
                  </h2>
                  <h4 className="text-md font-extralight text-zinc-500">
                    bolls
                  </h4>
                </div>
              </div>
              <button
                type="button"
                className="absolute right-0 top-0 m-4 text-gray-500 transition-all hover:text-red-300"
                onClick={onClose}
              >
                X
              </button>
            </div>
          </div>
        </>
      );
}

export default Modal