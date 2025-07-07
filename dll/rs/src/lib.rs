#[unsafe(no_mangle)]
extern "system" fn add(left: f64, right: f64) -> f64 {
    left + right
}
