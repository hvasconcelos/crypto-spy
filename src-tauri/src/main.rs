#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::{Menu};

fn main() {
  let context = tauri::generate_context!();
  let menu = Menu::os_default("Crypto Tracker");  
  tauri::Builder::default()
    .menu(menu)   
    .run(context)
    .expect("error while running tauri application");
}
