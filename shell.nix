# NixOS: `nix-shell` gives you node + npm. Then `npm install && npm run build`.
{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = [ pkgs.nodejs ];
}
