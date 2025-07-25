// An About Page component that can be used in the Home page and About page
export default function AboutIntro(){
    return(
        <section className="text-center">
            <h1 className="text-5xl font-bold">About GlobalEye Drones</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
                We build intelligent drones powered by AI for agriculture , surveillance,
                delivery , and environmental monitoring.
            </p>
        </section>
    );
}