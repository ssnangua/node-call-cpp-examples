#[unsafe(no_mangle)]
extern "system" fn add(a: f64, b: f64) -> f64 {
    a + b
}
