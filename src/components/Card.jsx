import coffeeBag1 from '../assets/product1.png'

export default function Card() {
  return (
    <div>
      <div className="w-full h-full overflow-hidden bg-slate-100 flex justify-center">
        <img
          className="w-36 py-3 duration-300 hover:scale-95"
          src={coffeeBag1}
          alt="Product1"
        />
      </div>
      <div className="flex justify-between text-xl mt-2">
        <span className="text-white">6 Bean Espresso</span>
        <span className="text-white">$ 150.00</span>
      </div>
    </div>
  );
}
